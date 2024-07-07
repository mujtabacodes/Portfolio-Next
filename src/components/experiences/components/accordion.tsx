import { techStack } from '@/config';
import { H3, P, SubtitleH3 } from '@/styles/typos';
import { Row } from '@/styles/utils';
import { IExperience } from '@/types/types';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react';
import Image from 'next/image';
import { TfiArrowCircleDown } from 'react-icons/tfi';

export default function Accordion({ data, open }: IExperience) {
  const { title, company, date, description, image } = data;

  return (
    <Disclosure as="div" defaultOpen={open}>
      <DisclosureButton className="flex flex-col md:flex-row group w-full items-center justify-between p-4 bg-secondary rounded-lg">
        <Row className="w-full md:w-2/4  group-data-[hover]:opacity-80">
          <div className="flex items-center justify-start">
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
        <Row className="w-full md:w-2/4  justify-end items-center gap-3 group-data-[hover]:opacity-80">
          <SubtitleH3>{date}</SubtitleH3>
          <TfiArrowCircleDown className="text-lg group-data-[hover]:opacity-80 group-data-[open]:rotate-180 rounded-full transition-transform shadow-md" />
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
        <DisclosurePanel className=" p-2 md:px-10 pb-4 origin-top text-sm leading-5 text-primary-foreground bg-opacity-50 border-b-2 rounded-b-lg">
          {description.map((item, index) => (
            <P key={index}>
              &#8226;{' '}
              {item.split(' ').map((word, i) =>
                techStack.includes(word) ? (
                  <span key={i} className="text-heightlightColor">
                    {word}{' '}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                ),
              )}
            </P>
          ))}
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  );
}
