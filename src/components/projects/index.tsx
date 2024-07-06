import { Section } from '@/styles/utils';
import { SectionHeader } from '../section-header';
import Slider from './components/slider';

export default function Projects() {
  return (
    <Section id="projects" data-aos="zoom-out-up">
      <SectionHeader
        heading="Projects"
        subTitle="Featured Work and Project Showcase"
        align="start"
      />
      <Slider />
    </Section>
  );
}
