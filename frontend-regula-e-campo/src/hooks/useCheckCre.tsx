import { useEffect } from "react";
import useCreStore, { Cre } from "@/stores/useCreStore";

/**
 * Hook que verifica se há usuário autenticado no Zustand.
 * Se não houver, faz uma requisição para o backend (/api/chkUsr),
 * atualiza o Zustand e exibe logs detalhados sobre o processo.
 */
export function useCheckCre() {
  const cre = useCreStore((state) => state.cre);
  const setCre = useCreStore((state) => state.setCre);
  const clearCre = useCreStore((state) => state.clearCre);

  useEffect(() => {
    console.log("[useCheckCre] Usuário atual no store:", cre);

    if (!cre) {
      const fetchCre = async () => {
        console.log(
          "[useCheckCre] Tentando buscar usuário autenticado no backend..."
        );
        try {
          const response = await fetch(
            "https://localhost:3002/private/fndCre",
            {
              method: "GET",
              credentials: "include",
            }
          );
          console.log("[useCheckCre] Status da resposta:", response.status);

          if (response.ok) {
            const data = await response.json();
            if (data && data.result) {
              console.log("[useCheckCre] Recebido do backend:", data.result);
              // Mapeando para a interface Cre do front-end
              const mappedCre: Cre = {
                id: data.result.creator_id,
                name: data.result.name,
                email: data.result.email,
                image: data.result.image,
              };
              console.log(
                "[useCheckCre] Usuário mapeado para o store:",
                mappedCre
              );
              setCre(mappedCre);
            } else {
              console.log(
                "[useCheckCre] Nenhum usuário encontrado na resposta. Limpando store."
              );
              clearCre();
            }
          } else {
            console.log(
              "[useCheckCre] Resposta não OK. Limpando usuário no store."
            );
            clearCre();
          }
        } catch (err) {
          console.error("[useCheckCre] Erro ao buscar usuário:", err);
          clearCre();
        } finally {
          console.log(
            "[useCheckCre] Usuário final no store:",
            useCreStore.getState().cre
          );
        }
      };

      fetchCre();
    } else {
      console.log(
        "[useCheckCre] Usuário já presente. Nenhuma ação necessária."
      );
    }
  }, [cre, setCre, clearCre]);
}
