import React, { useState } from "react";
import styled from "styled-components";

const tableMov = () => {
  const [activeTab, setActiveTab] = useState<string>("tab-1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <Container>
      <TabContainer className="border-b border-gray-200">
        <TabNav aria-label="Tabs" role="tablist">
          <TabButton
            onClick={() => handleTabClick("tab-1")}
            active={activeTab === "tab-1"}
            id="tab-1"
            aria-controls="tab-1-panel"
            role="tab"
          >
            FOR 004 (MOVIMIENTO)
          </TabButton>
          <TabButton
            onClick={() => handleTabClick("tab-2")}
            active={activeTab === "tab-2"}
            id="tab-2"
            aria-controls="tab-2-panel"
            role="tab"
          >
            FPL AMHS (PLANES DE VUELO)
          </TabButton>
        </TabNav>
      </TabContainer>

      <div className="mt-3">
        <TabPanel activeTab={activeTab} tabId="tab-1" id="tab-1-panel">
          <TableContainer>
            <form className="mb-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="BITACORA DE VUELO"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Buscar bitacora
                </button>
              </div>
            </form>

            <Table className="table-auto min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Fecha</th>
                  <th className="px-4 py-2">De:</th>
                  <th className="px-4 py-2">A:</th>
                  <th className="px-4 py-2">Despegue</th>
                  <th className="px-4 py-2">Arribo</th>
                  <th className="px-4 py-2">Empresa</th>
                  <th className="px-4 py-2">Punt Sal/Ent</th>
                  <th className="px-4 py-2">Obs</th>
                  <th className="px-4 py-2">ATCO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="px-4 py-2">Malcolm Lockyer</td>
                  <td className="px-4 py-2">1961</td>
                  <td className="px-4 py-2">Malcolm Lockyer</td>
                  <td className="px-4 py-2">Malcolm Lockyer</td>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                </tr>
                {/* Añadir más filas según sea necesario */}
              </tbody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel activeTab={activeTab} tabId="tab-2" id="tab-2-panel">
          <TableContainer>
            <form className="mb-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="MATRICULA O NRO DE VUELO"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Buscar plan de vuelo
                </button>
              </div>
            </form>

            <Table className="table-auto min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">Fecha</th>
                  <th className="px-4 py-2">De:</th>
                  <th className="px-4 py-2">A:</th>
                  <th className="px-4 py-2">Despegue</th>
                  <th className="px-4 py-2">Arribo</th>
                  <th className="px-4 py-2">Empresa</th>
                  <th className="px-4 py-2">Punt Sal/Ent</th>
                  <th className="px-4 py-2">Obs</th>
                  <th className="px-4 py-2">ATCO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="px-4 py-2">Malcolm Lockyer</td>
                  <td className="px-4 py-2">1961</td>
                  <td className="px-4 py-2">Malcolm Lockyer</td>
                  <td className="px-4 py-2">Malcolm Lockyer</td>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                  <td className="px-4 py-2">
                    The Sliding Mr. Bones (Next Stop, Pottersville)
                  </td>
                </tr>
                {/* Añadir más filas según sea necesario */}
              </tbody>
            </Table>
          </TableContainer>
        </TabPanel>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
`;

const TabContainer = styled.div`
  border-bottom: 1px solid #e2e8f0;
`;

const TabNav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 1rem;
  font-size: 0.875rem;
  border: none;
  border-bottom: 2px solid
    ${({ active }) => (active ? "#3182ce" : "transparent")};
  color: ${({ active }) => (active ? "#3182ce" : "#6b7280")};
  font-weight: ${({ active }) => (active ? "600" : "normal")};
  cursor: pointer;
  background: none;

  &:hover {
    color: #3182ce;
  }

  &:focus {
    outline: none;
    color: #3182ce;
  }
`;

const TabPanel = styled.div<{ activeTab: string; tabId: string }>`
  display: ${({ activeTab, tabId }) =>
    activeTab === tabId ? "block" : "none"};
`;

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export default tableMov;
