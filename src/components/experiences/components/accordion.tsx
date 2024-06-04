import { H3, P, Subtitle, SubtitleH3 } from '@/styles/typos';
import { Row } from '@/styles/utils';
import { IExperience } from '@/types/types';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import Image from 'next/image';
import { IoMdArrowDropupCircle } from 'react-icons/io';

export default function Accordion({ data, open }: IExperience) {
  const { title, company, date, description, image } = data;
  console.log(title);
  return (
    <Disclosure as="div" defaultOpen={open}>
      <DisclosureButton className="flex group w-full items-center justify-between p-4 bg-secondary rounded-lg">
        <Row className="w-2/4 group-data-[hover]:opacity-80">
          <div className="flex items-center justify-center">
            <Image
              width={50}
              height={50}
              className="object-cover rounded-full shadow-md hover:shadow-xl"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex flex-col gap-1 ml-4 items-start">
            <H3>{title}</H3>
            <SubtitleH3>{company}</SubtitleH3>
          </div>
        </Row>
        <Row className="w-2/4  justify-end items-center gap-2 group-data-[hover]:opacity-80">
          <SubtitleH3>{date}</SubtitleH3>
          <IoMdArrowDropupCircle className="size-5  group-data-[hover]:opacity-80 group-data-[open]:rotate-180 rounded-full transition-transform shadow-md" />
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
        <DisclosurePanel className=" p-2 md:p-3 origin-top text-sm leading-5 text-primary-foreground bg-opacity-50 border-b-2 rounded-b-lg">
          {description.map((item, index) => (
            <p key={index}>
              &#8226;{' '}
              {item.split(' ').map((word, i) =>
                word === 'React' ||
                word === 'TypeScript' ||
                word === 'NextJS' ||
                word === 'NodeJS' ? (
                  <span key={i} className="text-heightlightColor">
                    {word}{' '}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                ),
              )}
            </p>
          ))}
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  );
}
