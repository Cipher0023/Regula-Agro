import { useEffect } from "react";
import useRdrStore, { Rdr } from "@/stores/useRdrStore";

/**
 * Hook que verifica se há usuário autenticado no Zustand.
 * Se não houver, faz uma requisição para o backend (/api/chkUsr),
 * atualiza o Zustand e exibe logs detalhados sobre o processo.
 */
export function useCheckRdr() {
  const user = useRdrStore((state) => state.reader);
  const setRdr = useRdrStore((state) => state.setRdr);
  const clearRdr = useRdrStore((state) => state.clearRdr);

  useEffect(() => {
    console.log("[useCheckRdr] Usuário atual no store:", user);

    if (!user) {
      const fetchRdr = async () => {
        console.log(
          "[useCheckRdr] Tentando buscar usuário autenticado no backend..."
        );
        try {
          const response = await fetch(
            "https://localhost:3002/private/fndRdr",
            {
              method: "GET",
              credentials: "include",
            }
          );
          console.log("[useCheckRdr] Status da resposta:", response.status);

          if (response.ok) {
            const data = await response.json();
            if (data && data.user) {
              console.log("[useCheckRdr] Recebido do backend:", data.user);
              // Mapeando para a interface Rdr do front-end
              const mappedRdr: Rdr = {
                id: data.user.user_id,
                name: data.user.name,
                email: data.user.email,
              };
              console.log(
                "[useCheckRdr] Usuário mapeado para o store:",
                mappedRdr
              );
              setRdr(mappedRdr);
            } else {
              console.log(
                "[useCheckRdr] Nenhum usuário encontrado na resposta. Limpando store."
              );
              clearRdr();
            }
          } else {
            console.log(
              "[useCheckRdr] Resposta não OK. Limpando usuário no store."
            );
            clearRdr();
          }
        } catch (err) {
          console.error("[useCheckRdr] Erro ao buscar usuário:", err);
          clearRdr();
        } finally {
          console.log(
            "[useCheckRdr] Usuário final no store:",
            useRdrStore.getState().user
          );
        }
      };

      fetchRdr();
    } else {
      console.log(
        "[useCheckRdr] Usuário já presente. Nenhuma ação necessária."
      );
    }
  }, [user, setRdr, clearRdr]);
}
