import React from 'react';

import * as Io from "react-icons/io";
import * as Bi from "react-icons/bi";
import * as Ri from "react-icons/ri";
import * as Fa from "react-icons/fa";

export const navItemData = [
    {
        titulo: 'Home',
        url: '/',
        icon: <Io.IoMdHome />
    },
    {
        titulo: 'Transações',
        url: '/transacoes',
        icon: <Bi.BiTransfer />
    },
    {
        titulo: 'Contas',
        url: '/contas',
        icon: <Ri.RiBankFill />
    },
    {
        titulo: 'Categorias',
        url: '/categorias',
        icon: <Fa.FaTags />
    },
    {
        titulo: 'Configurações',
        url: '/configuracao',
        icon: <Io.IoMdSettings />
    }
]