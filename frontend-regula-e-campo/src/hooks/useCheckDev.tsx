import { useEffect } from "react";
import useDevStore, { Dev } from "@/stores/useDevStore";

/**
 * Hook que verifica se há dev autenticado no Zustand.
 * Se não houver, faz uma requisição para o backend (/api/chkDev),
 * atualiza o Zustand e exibe logs detalhados sobre o processo.
 */
export function useCheckDev() {
  const dev = useDevStore((state) => state.dev);
  const setDev = useDevStore((state) => state.setDev);
  const clearDev = useDevStore((state) => state.clearDev);

  useEffect(() => {
    console.log("[useCheckDev] Dev atual no store:", dev);

    if (!dev) {
      const fetchDev = async () => {
        console.log(
          "[useCheckDev] Tentando buscar dev autenticado no backend..."
        );
        try {
          const response = await fetch("https://localhost:3002/public/fndDev", {
            method: "GET",
            credentials: "include",
          });
          console.log("[useCheckDev] Status da resposta:", response.status);

          if (response.ok) {
            const data = await response.json();
            if (data && data.result) {
              console.log("[useCheckDev] Recebido do backend:", data.result);
              // Mapeando para a interface Dev do front-end
              const mappedDev: Dev = {
                id: data.result.dev_id,
                name: data.result.name,
                email: data.result.email,
                image: data.result.image,
              };
              console.log("[useCheckDev] Dev mapeado para o store:", mappedDev);
              setDev(mappedDev);
            } else {
              console.log(
                "[useCheckDev] Nenhum dev encontrado na resposta. Limpando store."
              );
              clearDev();
            }
          } else {
            console.log(
              "[useCheckDev] Resposta não OK. Limpando dev no store."
            );
            clearDev();
          }
        } catch (err) {
          console.error("[useCheckDev] Erro ao buscar dev:", err);
          clearDev();
        } finally {
          console.log(
            "[useCheckDev] Dev final no store:",
            useDevStore.getState().dev
          );
        }
      };

      fetchDev();
    } else {
      console.log("[useCheckDev] Dev já presente. Nenhuma ação necessária.");
    }
  }, [dev, setDev, clearDev]);
}
