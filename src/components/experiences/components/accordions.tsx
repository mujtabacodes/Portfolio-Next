'use client';
import { H3, P, Subtitle } from '@/styles/typos';
import { Row } from '@/styles/utils';
import { IAccordion } from '@/types/types';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, animations, easeOut, motion } from 'framer-motion';
export default function Accordion({ data, open }: IAccordion) {
  const { id, title, company, date, description, image } = data;
  console.log(title);
  return (
    <Disclosure as="div" defaultOpen={open}>
      <DisclosureButton className="flex group w-full items-center justify-between p-4 bg-secondary rounded-lg">
        <Row className="w-2/4">
          <div className="flex items-center justify-center">
            <Image
              width={50}
              height={50}
              className="object-cover rounded-full shadow-md"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex flex-col gap-1 ml-4 items-start">
            <H3>{title}</H3>
            <Subtitle>{company}</Subtitle>
          </div>
        </Row>
        <Row className="w-2/4  justify-end items-center gap-2">
          <P>{date}</P>
          <ChevronDownIcon className="w-5 h-5 fill-white/60 group-hover:fill-white/50 group-open:rotate-180 transition-transform" />{' '}
        </Row>
      </DisclosureButton>

      <Transition
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 -translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-300 ease-out"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-6"
      >
        <DisclosurePanel className="mt-2 origin-top text-sm leading-5 text-white/50">
          <P>{description}</P>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  );
}
