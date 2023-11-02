import { IoMdPrint, IoIosSend } from "react-icons/io";
import { BiSolidHelpCircle, BiSolidHide, BiHide } from "react-icons/bi";
import {
  AiOutlineClear,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { MdOutlineManageSearch, MdAddBox } from "react-icons/md";
import {
  FaSave,
  FaEye,
  FaWindowClose,
  FaUndo,
  FaHandHoldingMedical,
  FaFilter,
} from "react-icons/fa";
import { FaLockOpen, FaLock } from "react-icons/fa6";
import {
  RiMenuAddFill,
  RiDeleteBin6Line,
  RiHistoryFill,
  RiVideoFill,
} from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { LuDownload } from "react-icons/lu";
import { BiSolidSearch, BiFolderOpen } from "react-icons/bi";
import { PiFolderOpenFill, PiMoon, PiProhibitBold } from "react-icons/pi";
import { TiExport } from "react-icons/ti";
import { TbProgress, TbCubeSend } from "react-icons/tb";
import { BsSendFill, BsSunFill } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";
import { ImAttachment } from "react-icons/im";
import { HiOutlineRefresh } from "react-icons/hi";
import React from "react";

const icons = [
  {
    name: "Refrescar",
    icons: [<HiOutlineRefresh className="icon" />],
  },
  {
    name: "Editar",
    icons: [<TiEdit className="icon" />],
  },
  {
    name: "Guardar",
    icons: [<FaSave className="icon" />],
  },
  {
    name: "Insertar",
    icons: [<RiMenuAddFill className="icon" />],
  },
  {
    name: "Nuevo",
    icons: [<MdAddBox className="icon" />],
  },
  {
    name: "Buscar",
    icons: [<MdOutlineManageSearch className="icon" />],
  },
  {
    name: "Procesar",
    icons: [<TbProgress className="icon" />],
  },
  {
    name: "Descargar",
    icons: [<LuDownload className="icon" />],
  },
  {
    name: "Enviar",
    icons: [<IoIosSend className="icon" />],
  },
  {
    name: "Recibir",
    icons: [<FaHandHoldingMedical className="icon" />],
  },
  {
    name: "Eliminar",
    icons: [<RiDeleteBin6Line className="icon" />],
  },
  {
    name: "Ver",
    icons: [<FaEye className="icon" />],
  },
  {
    name: "Cerrar",
    icons: [<FaWindowClose className="icon" />],
  },
  {
    name: "Abrir",
    icons: [<PiFolderOpenFill className="icon" />],
  },
  {
    name: "Cargar",
    icons: [<FiUpload className="icon" />],
  },
  {
    name: "Exportar",
    icons: [<TiExport className="icon" />],
  },
  {
    name: "Print",
    icons: [<IoMdPrint className="icon" />],
  },
  {
    name: "Deshacer",
    icons: [<FaUndo className="icon" />],
  },
  {
    name: "Historial",
    icons: [<RiHistoryFill className="icon" />],
  },
  {
    name: "Filtrar",
    icons: [<FaFilter className="icon" />],
  },
  {
    name: "Adjuntar",
    icons: [<ImAttachment className="icon" />],
  },
  {
    name: "Dark/light mode",
    icons: [<PiMoon className="icon" />, <BsSunFill className="icon" />],
  },
  {
    name: "Lock",
    icons: [<FaLock className="icon" />],
  },
  {
    name: "Limpiar",
    icons: [<AiOutlineClear className="icon" />],
  },
  {
    name: "Unlock",
    icons: [<FaLockOpen className="icon" />],
  },
  {
    name: "Help",
    icons: [<BiSolidHelpCircle className="icon" />],
  },
  {
    name: "Video",
    icons: [<RiVideoFill className="icon" />],
  },
  {
    name: "Arrows",
    icons: [
      <AiOutlineArrowDown className="icon" />,
      <AiOutlineArrowUp className="icon" />,
      <AiOutlineArrowLeft className="icon" />,
      <AiOutlineArrowRight className="icon" />,
    ],
  },
  {
    name: "Hide",
    icons: [<BiSolidHide className="icon" />, <BiHide className="icon" />],
  },
  {
    name: "Cancelar",
    icons: [<PiProhibitBold className="icon" />],
  },
];

export default icons;
