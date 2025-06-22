"use client"

import Element from "@/components/element";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress";

const Home = () => {

  let rooms = ['chambre bleue', 'chambre verte', 'chambre orange', 'salle de bain', 'wc', 'cuisine', 'salon', 'entrée', 'couloir']

  return (
    <>
      <header className="p-4 md:p-8 fixed top-0 w-full bg-background border-b-2">
        <Progress />
      </header>
      <main className="flex flex-wrap p-4 md:p-8 gap-4 md:gap-8 pt-16 md:pt-24 pb-24 md:pb-32">
        <Accordion type="single" className="w-full">
          <AccordionItem value="type-A">
            <AccordionTrigger>Type A</AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-4 md:gap-8">
              <Element name="Test1" />
              <Element name="Test2" />
              <Element name="Test3" />
              <Element name="Test4" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="type-B">
            <AccordionTrigger>Type B</AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-4 md:gap-8">
              <Element name="Test1" />
              <Element name="Test2" />
              <Element name="Test3" />
              <Element name="Test4" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="type-C">
            <AccordionTrigger>Type C</AccordionTrigger>
            <AccordionContent className="flex flex-wrap gap-4 md:gap-8">
              <Element name="Test1" />
              <Element name="Test2" />
              <Element name="Test3" />
              <Element name="Test4" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
      <footer className="flex p-4 md:p-8 gap-4 md:gap-8 items-center fixed bottom-0 w-full bg-background border-t-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a room" />
          </SelectTrigger>
          <SelectContent>
            {rooms.map((e, i) => {
              return (
                <SelectItem value={e} key={i}>{e}</SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </footer>
    </>
  );
}

export default Home