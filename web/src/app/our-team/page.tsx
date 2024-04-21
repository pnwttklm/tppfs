"use client";
import React, { useState } from "react";
import { Button, Center, Card, CardBody,Stack, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function Page() {
    return (
      <>
        <Ourteam />
        <Allofus />
      </>
    );
  }

function Ourteam() {
  return (
    <>
      <div className = "text-5xl font-bold mb-10">
        <Center bg='' h='100px' color='black'>
          Our Team
        </Center>
      </div>
    </>
  );
}

function Allofus() {
  return (
    <>
      <div className="border border-gray bg-white p-6 rounded-3xl shadow-lg drop-shadow-lg md:w-auto mx-10">
        <Center>
          <Stack spacing={8} direction='row'>
            <Acard name="TATA" position="BackEnd" pic = "/TATA.jpg"/>
            <Acard name="Pun" position="FrontEnd" pic = "/pun.jpg"/>
            <Acard name="Poon" position="BackEnd" pic = "/poon.jpg"/>
            <Acard name="Four" position="FrontEnd" pic = "/4.jpg"/>
            <Acard name="Shuiiy" position="FrontEnd" pic = "/Shuii.jpg"/>
          </Stack>
        </Center>
      </div>
    </>
  );
}

interface AcardProps {
  name: string;
  position: string;
  pic : string;
}

function Acard({ name, position, pic}: AcardProps){
  return(
    <>
    <Card maxW='sm'>
      <CardBody>
        <div className="m-1">
          <Image 
            src={pic}
            alt='HA'
            width='200'
            height='200'
            className="rounded-full"
          />
        </div>
        <div className="mt-10">
          <Center>
            <Heading size='2xl'>
              {name}
            </Heading>
          </Center>
        </div>
        <div className="my-5">
          <Center>
            <Text fontSize='2xl'>
              {position}
            </Text>
          </Center>
        </div>
      </CardBody>
    </Card>
    </>
  );
}

