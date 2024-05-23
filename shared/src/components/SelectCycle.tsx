'use client'

import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { Listbox, Transition } from '@headlessui/react';
import { LuChevronsUpDown } from 'react-icons/lu';
import { FaCheck } from 'react-icons/fa6';
import { CycleData, GetCycles } from '@producer/app/_actions/products/GetCycles';

export default function SelectCycle() {
  const [selectedCycle, setSelectedCycle] = useState<string>('');
  const [cycles, setCycles] = useState<CycleData[] | undefined>();

  const handleCycleChange = (newCycle: string) => {
    setSelectedCycle(newCycle);

    const selectedCycleData = cycles?.find((cycle) => `Ciclo ${cycle.alias}` === newCycle);
    if (selectedCycleData) {
      localStorage.setItem('selected-cycle', JSON.stringify({
        id: selectedCycleData.id,
        alias: selectedCycleData.alias
      }))
    }
  };

  useEffect(() => {
    (async () => {
      const getCycles = await GetCycles();

      if (getCycles?.reply) {
        setCycles(getCycles.reply);
      }

      const savedCycleName = localStorage.getItem('selected-cycle');
      if (savedCycleName) {
        const { alias } = JSON.parse(savedCycleName)

        setSelectedCycle(`Ciclo ${alias}`);
      }
    })();
  }, []);

  return (
    <div>
      <span className="text-sm font-inter text-slate-gray">
        Para começar, selecione o{' '}
        <Link href={''} className="underline font-bold">
          Ciclo
        </Link>
      </span>
      <Listbox value={selectedCycle} onChange={handleCycleChange}>
        {({ open }) => (
          <>
            <div className="relative mt-1">
              <Listbox.Button
                className={`relative w-full py-3 cursor-default rounded-2xl bg-white pl-3 pr-10 text-left ${
                  open ? 'ring-2 ring-slate-gray' : ''
                }`}
              >
                <span className="block truncate text-slate-gray">
                  {selectedCycle || 'Selecione um ciclo'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <LuChevronsUpDown className="h-5 w-5 text-slate-gray" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {cycles?.map((cycle) => (
                    <Listbox.Option
                      key={cycle.id}
                      className={({ selected }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          selected ? 'text-slate-gray bg-theme-background' : 'bg-white'
                        }`
                      }
                      value={`Ciclo ${cycle.alias}`}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate text-slate-gray}`}>
                            {`Ciclo ${cycle.alias}`}
                          </span>
                          {selected && (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 bg-theme-background">
                              <FaCheck className="h-4 w-4 text-slate-gray" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
