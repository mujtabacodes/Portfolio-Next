import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

export function NavigationMenu() {

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-transparent"
          size={'sm'}
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="w-full flex flex-col items-center text-center">
            <DrawerTitle>Title</DrawerTitle>
            {/* <DrawerDescription>Choose an option</DrawerDescription> */}
          </DrawerHeader>

          <div className="p-4 pb-16">
            <div className="flex flex-col items-center justify-center space-y-2 text-lg">
              <Button variant="link" size={'lg'} asChild>
                <DrawerClose asChild>
                </DrawerClose>
              </Button>





              <Button size={'lg'} variant="link" asChild>
                <DrawerClose asChild>
                  <Link href={'/section'}>About</Link>

                </DrawerClose>
              </Button>
              <Button size={'lg'} variant="link" asChild>
                <DrawerClose asChild>
                  <Link href={'/section'}>Projects</Link>

                </DrawerClose>
              </Button>
              <Button size={'lg'} variant="link" asChild>
                <DrawerClose asChild>
                  <Link href="#contact">Experience</Link>

                </DrawerClose>
              </Button>
              <Button size={'lg'} variant="link" asChild>
                <DrawerClose asChild>

                  <Link href={'/section'}>Contact</Link>

                </DrawerClose>
              </Button>



            </div>
          </div>


          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}