"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { DropEvent, useDrop } from "react-aria";
import { FileTrigger, Button } from "react-aria-components";
import * as Form from "@radix-ui/react-form";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FiDelete } from "react-icons/fi";

function Pictures({
  pictures,
  removePicture,
}: {
  pictures: File[];
  removePicture: (index: number) => void;
}) {
  const [picturesAnimationParent] = useAutoAnimate();

  return (
    <div className="flex mt-4 w-full" ref={picturesAnimationParent}>
      {pictures.map((picture, index) => {
        return (
          <div className="h-24 w-24 mr-2.5 relative" key={index}>
            <Image
              className="object-cover h-full w-full z-0"
              src={URL.createObjectURL(picture)}
              alt={`Foto ${index + 1}`}
              width={96}
              height={96}
            />
            <Button
              className="absolute top-1 right-1 z-10 cursor-pointer"
              onPress={() => removePicture(index)}
            >
              <FiDelete className="text-red-600 text-lg" />
              <VisuallyHidden.Root>
                Excluir foto ${index + 1}
              </VisuallyHidden.Root>
            </Button>
          </div>
        );
      })}
    </div>
  );
}

function PicturesInput({
  addPicture,
}: {
  addPicture: (picture: File) => void;
}) {
  const dropZoneRef = useRef(null);

  const [warnInvalidFormat, setWarnInvalidFormat] = useState(false);

  let { dropProps } = useDrop({
    ref: dropZoneRef,
    onDrop: onFilesDrop,
  });

  async function onFileTriggerChange(files: FileList | null) {
    if (files === null) return;

    for (const file of files) addPicture(file);
  }

  async function onFilesDrop(e: DropEvent) {
    let hasInvalid = false;

    e.items.forEach(async (item) => {
      if (item.kind !== "file" || !item.type.startsWith("image/")) {
        !hasInvalid && (hasInvalid = true);
        return;
      }

      addPicture(await item.getFile());
    });

    if (hasInvalid) {
      !warnInvalidFormat && setWarnInvalidFormat(true);
      return;
    }

    warnInvalidFormat && setWarnInvalidFormat(false);
  }

  return (
    <Form.Field className="flex flex-col mt-8" name="pictures">
      <Form.Control asChild>
        <FileTrigger
          acceptedFileTypes={["image/*"]}
          allowsMultiple
          onChange={onFileTriggerChange}
        >
          <Button className="bg-rain-forest text-ghost-white-100 relative">
            Arraste ou selecione fotos
            <div
              {...dropProps}
              className="absolute top-0 left-0 h-6 w-full"
              ref={dropZoneRef}
            />
          </Button>
        </FileTrigger>
      </Form.Control>
      <Form.Message match="valueMissing">
        Insira pelo menos uma foto do produto
      </Form.Message>
      {warnInvalidFormat && (
        <Form.Message draggable>Formato inválido de arquivo</Form.Message>
      )}
    </Form.Field>
  );
}

export default function Products() {
  const [pictures, setPictures] = useState<File[]>([]);

  function addPicture(picture: File) {
    setPictures((prev) => [...prev, picture]);
  }

  function removePicture(index: number) {
    setPictures((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
  }

  return (
    <Form.Root
      className="flex flex-col items-start ml-8 mt-8"
      onSubmit={onSubmit}
    >
      <Form.Field name="name">
        <Form.Label>Nome do produto</Form.Label>
        <Form.Control className="flex flex-col" asChild>
          <input className="bg-ghost-white-200" type="text" required />
        </Form.Control>
        <Form.Message className="ecoo-text-sm" match="valueMissing">
          Insira um nome para o produto
        </Form.Message>
      </Form.Field>
      <PicturesInput addPicture={addPicture} />
      <Pictures pictures={pictures} removePicture={removePicture} />
      <Form.Submit
        className="bg-rain-forest text-ghost-white-100 ecoo-text-button"
        asChild
      >
        <button className="mt-8">Registrar produto</button>
      </Form.Submit>
    </Form.Root>
  );
}
