"use client";
import {
  Stack,
  Spinner,
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";

function MyButton() {
  return <button>hello</button>;
}
export default function Page() {
  return (
    <>
      <h1 className="pl-20 font-extrabold text-[#FFFFFF] rounded-full bg-black border-2 w-6 border-black">
        Hello I am poon
      </h1>
      <MyButton />
      {user.map((hello, world) => (
        <div key={world}>
          <h1>{world}</h1>
          <h1>{hello.id}</h1>
          <h1>{hello.name}</h1>
          ---------------------
        </div>
      ))}
      <Stack direction="row" spacing={4}>
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </Stack>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <h1> herojelj</h1>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <BsCart3 size={100} />
    </>
  );
}

const user = [
  {
    name: "poon",
    id: 6588048,
  },
  {
    name: "pun",
    id: 6588039,
  },
  {
    name: "TATa",
    id: 6588010,
  },
];
