import { useEffect } from "react";
import useUserStore, { User } from "@/stores/useCreStore";

/**
 * Hook que verifica se há usuário autenticado no Zustand.
 * Se não houver, faz uma requisição para o backend (/api/chkUsr),
 * atualiza o Zustand e exibe logs detalhados sobre o processo.
 */
export function useCheckUser() {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    console.log("[useCheckUser] Usuário atual no store:", user);

    if (!user) {
      const fetchUser = async () => {
        console.log(
          "[useCheckUser] Tentando buscar usuário autenticado no backend..."
        );
        try {
          const response = await fetch(
            "https://localhost:3002/private/fndCre",
            {
              method: "GET",
              credentials: "include",
            }
          );
          console.log("[useCheckUser] Status da resposta:", response.status);

          if (response.ok) {
            const data = await response.json();
            if (data && data.user) {
              console.log("[useCheckUser] Recebido do backend:", data.user);
              // Mapeando para a interface User do front-end
              const mappedUser: User = {
                id: data.user.user_id,
                name: data.user.name,
                email: data.user.email,
              };
              console.log(
                "[useCheckUser] Usuário mapeado para o store:",
                mappedUser
              );
              setUser(mappedUser);
            } else {
              console.log(
                "[useCheckUser] Nenhum usuário encontrado na resposta. Limpando store."
              );
              clearUser();
            }
          } else {
            console.log(
              "[useCheckUser] Resposta não OK. Limpando usuário no store."
            );
            clearUser();
          }
        } catch (err) {
          console.error("[useCheckUser] Erro ao buscar usuário:", err);
          clearUser();
        } finally {
          console.log(
            "[useCheckUser] Usuário final no store:",
            useUserStore.getState().user
          );
        }
      };

      fetchUser();
    } else {
      console.log(
        "[useCheckUser] Usuário já presente. Nenhuma ação necessária."
      );
    }
  }, [user, setUser, clearUser]);
}
