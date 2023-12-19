"use client";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { BiExpandVertical } from "react-icons/bi";

interface DropdownProps {
  data: Array<{ id: number; name: string; unavailable: boolean }>;
}

export default function Dropdown({ data }: DropdownProps) {
  const [selectedJustification, setSelectedJustification] = useState(data[0]);

  return (
    <div className="w-full font-inter">
      <Listbox
        value={selectedJustification}
        onChange={setSelectedJustification}
      >
        {({ open }) => {
          return (
            <>
              <Listbox.Button
                className={`p-3 h-12 w-full rounded-t-lg bg-white text-left border  border-t-primary border-x-primary text-base ${
                  open ? "border-b-0" : "border-b border-primary rounded-b-lg"
                }`}
              >
                <span className="flex">
                  {selectedJustification.name}{" "}
                  <BiExpandVertical className="ml-auto mt-1" />
                </span>
              </Listbox.Button>
              {open && (
                <Listbox.Options
                  className={
                    "border border-t-0 border-x-primary border-b-primary rounded-b-lg bg-white"
                  }
                >
                  {data.map(
                    (justification, index) =>
                      justification.id !== selectedJustification.id && (
                        <Listbox.Option
                          key={justification.id}
                          value={justification}
                          disabled={justification.unavailable}
                          className={
                            "p-3 h-12 w-full text-base border-t" +
                            (index === data.length - 1 ? "" : "")
                          }
                        >
                          {justification.name}
                        </Listbox.Option>
                      )
                  )}
                </Listbox.Options>
              )}
            </>
          );
        }}
      </Listbox>
    </div>
  );
}
