'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import React from 'react';
import RioComponent from "@/components/data/rios";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

export default function Rios() {
  const [rios, setRios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  useEffect(() => {
    const fetchRios = async () => {
      const response = await fetch('/data/Ríos.json');
      const data = await response.json();
      setRios(data.features);
    };

    fetchRios();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rios.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(rios.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-12 text-blue-500">Información de los Ríos</h1>

        {/* Tarjetas de los Ríos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {currentItems.map((rio, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Información del río */}
              <div className="mb-4">
                <p className="flex justify-center items-center text-lg font-medium text-blue-500"> {/* Centrado y color azul */}
                  {rio.properties?.NOMBRE_CA}
                </p>
                <p className="flex items-center text-lg font-medium text-gray-700">
                  <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    {checkIcon}
                  </span>
                  Codigo CA: {rio.properties?.CODIGO_CA}
                </p>
                <p className="flex items-center text-lg font-medium text-gray-700">
                  <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    {checkIcon}
                  </span>
                  Tipo: {rio.properties?.TIPO_CA}
                </p>
                <p className="flex items-center text-lg font-medium text-gray-700">
                  <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                    {checkIcon}
                  </span>
                  Longitu (km): {rio.properties?.LONG_KM}
                </p>
              </div>

              {/* Coordenadas estilizadas */}
              <div className="text-sm text-gray-500">
                <p className="font-semibold">Coordenadas:</p>
                <div className="break-all overflow-hidden">
                  <p className="truncate">{rio.geometry?.coordinates.join(', ')}</p>
                </div>
                <RioComponent />

              </div>
            </motion.div>

          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-center items-center mt-8">
          {/* Botón de Anterior */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400 hover:bg-blue-600 transition-all"
          >
            Anterior
          </button>

          {/* Números de página */}
          <div className="flex items-center">
            {currentPage > 2 && (
              <>
                <button
                  onClick={() => handlePageChange(1)}
                  className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300 transition-all"
                >
                  1
                </button>
                <span className="mx-2 text-lg text-gray-700">...</span>
              </>
            )}

            {/* Página actual */}
            <button
              onClick={() => handlePageChange(currentPage)}
              className="px-4 py-2 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            >
              {currentPage}
            </button>

            {/* Siguiente página */}
            {currentPage < totalPages - 1 && (
              <span className="mx-2 text-lg text-gray-700">...</span>
            )}

            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-4 py-2 mx-1 bg-gray-200 rounded-md hover:bg-gray-300 transition-all"
              >
                {totalPages}
              </button>
            )}
          </div>

          {/* Botón de Siguiente */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400 hover:bg-blue-600 transition-all"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}
