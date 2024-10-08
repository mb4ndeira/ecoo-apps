'use client'

import React from 'react';
import Button from '@shared/components/Button';
import Link from 'next/link';
import Table from './components/Table';

export default function InformacoesCiclo() {
  return (
    <div className="w-full h-full p-5 flex items-center flex-col">
      <div className="flex flex-col h-[35%] w-full items-center justify-end">
        <h1 className="text-3xl font-medium text-slate-gray mb-4 text-center">Informações <br /> do Ciclo</h1>
        <span className="text-sm font-medium text-slate-gray mb-6 text-center">
          No e-COO, cada Centro de <br />
          Distribuição (CDD) tem seu próprio <br />
          ciclo de funcionamento. Confira as <br />
          definições do ciclo selecionado:
        </span>
      </div>
      <div className="w-full h-[65%] flex flex-col justify-between">
        <div className='overflow-y-auto mb-6'>
          <Table />
        </div>
        <Button className="w-full px-2 py-3 font-semibold rounded-lg text-white border-0 p-2 bg-walnut-brown">
          <Link href={'/'}>
            OK, entendi
          </Link>
        </Button>
      </div>
    </div>
  );
}
