import { useEffect } from "react";
import useRdrStore, { Rdr } from "@/stores/useRdrStore";

/**
 * Hook que verifica se há reader autenticado no Zustand.
 * Se não houver, faz uma requisição para o backend (/api/chkRdr),
 * atualiza o Zustand e exibe logs detalhados sobre o processo.
 */
export function useCheckRdr() {
  const reader = useRdrStore((state) => state.reader);
  const setRdr = useRdrStore((state) => state.setRdr);
  const clearRdr = useRdrStore((state) => state.clearRdr);

  useEffect(() => {
    console.log("Reader atual no store:", reader);

    if (!reader) {
      const fetchRdr = async () => {
        console.log(" Tentando buscar reader autenticado no backend...");
        try {
          const response = await fetch(
            "https://localhost:3002/private/fndRdr",
            {
              method: "GET",
              credentials: "include",
            }
          );
          console.log(" Status da resposta:", response.status);

          if (response.ok) {
            const data = await response.json();
            if (data && data.result) {
              console.log(" Recebido do backend:", data.result);
              // Mapeando para a interface Rdr do front-end
              const mappedRdr: Rdr = {
                id: data.result.reader_id,
                name: data.result.name,
                email: data.result.email,
                image: data.result.image,
              };
              console.log(" Usuário mapeado para o store:", mappedRdr);
              setRdr(mappedRdr);
            } else {
              console.log(
                " Nenhum usuário encontrado na resposta. Limpando store."
              );
              clearRdr();
            }
          } else {
            console.log(" Resposta não OK. Limpando usuário no store.");
            clearRdr();
          }
        } catch (err) {
          console.error(" Erro ao buscar usuário:", err);
          clearRdr();
        } finally {
          console.log(
            " Usuário final no store:",
            useRdrStore.getState().reader
          );
        }
      };

      fetchRdr();
    } else {
      console.log("Reader já presente. Nenhuma ação necessária.");
    }
  }, [reader, setRdr, clearRdr]);
}
