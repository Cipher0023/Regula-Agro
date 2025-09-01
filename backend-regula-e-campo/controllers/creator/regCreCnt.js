
import { regCre } from "../../services/creator/regCreSrv.js";

export const regCreCnt = async (req, res) => {
  try {
    const { name, email, password, document_type, document_number, role_id } =
      req.body;
    console.log("Dados recebidos:", req.body);

    // Criar novo usuário
    const newUser = await regCre(
      name,
      email,
      password,
      document_type,
      document_number,
      role_id
    );
    console.log(newUser);
    return res.status(201).json(newUser);
  } catch (err) {
    console.error("Erro ao registrar usuário:", err.message);
    return res.status(500).json({ message: err.message });
  }
};
