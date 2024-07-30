import styled from "styled-components";
import React from "react";
import NotMov from "../components/notMov";
import TableMov from "../components/tableMov";
import FormMov from "../components/formMov";
import { FechaHora } from "../components/FechaMov";

export function Home() {
  return (<Container>
    <div className="flex justify-center items-center">
      <p className="italic font-black text-3xl">MOVIMIENTO DE AERONAVE</p>
    </div>
   

      <div className="grid gap-1 sm:grid-cols-1 md:grid-cols-2">
    <div>
      <FechaHora/>
    </div>
    <div >
      <NotMov />
    </div>
  </div>


   

    <div className="grid gap-1 sm:grid-cols-1 md:grid-cols-3 p-6">
    <div className="p-1 md:col-span-1">
      <FormMov />
    </div>
    <div className="p-1 overflow-x-auto text-left md:col-span-2 w-full max-w-full">
      <TableMov />
    </div>
  </div>
  </Container>);
}
const Container = styled.div`
  height:100vh;
`