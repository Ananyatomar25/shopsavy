"use client";

import React from "react";
import StarRatings from "react-star-ratings";
import BreadCrumbs from "../../components/layouts/BreadCrumbs";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/models/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group
        position={[9.56, 33.128, -64.363]}
        rotation={[-3.122, 0.163, 0.01]}
      >
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            geometry={nodes.Stereo_textured_mesh_Material0_0.geometry}
            material={materials.Material0}
          />
          <mesh
            geometry={nodes.Stereo_textured_mesh_Material0_0_1.geometry}
            material={materials.Material0}
          />
          <mesh
            geometry={nodes.Stereo_textured_mesh_Material0_0_2.geometry}
            material={materials.Material0}
          />
          <mesh
            geometry={nodes.Stereo_textured_mesh_Material0_0_3.geometry}
            material={materials.Material0}
          />
          <mesh
            geometry={nodes.Stereo_textured_mesh_Material0_0_4.geometry}
            material={materials.Material0}
          />
        </group>
      </group>
    </group>
  );
}

const ProductDetails = () => {
  const breadCrumbs = [
    { name: "Home", url: "/" },
    {
      name: "toy",
      url: "/3dmodel",
    },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5 h-96">
                <Canvas className="object-cover inline-block">
                  <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight
                      intensity={0.9}
                      angle={Math.PI/3}
                      penumbra={1}
                      position={[10, 15, 10]}
                      castShadow
                    />
                    <Model />
                    <OrbitControls
                      enablePan={true}
                      enableZoom={true}
                      enableRotate={true}
                    />
                  </Suspense>
                </Canvas>
              </div>
            </aside>
            <main>
              <h2 className="font-semibold text-2xl mb-4">
                Green Dinosaur Toy
              </h2>

              <div className="flex flex-wrap items-center space-x-2 mb-2">
                <div className="ratings">
                  <StarRatings
                    rating={4.2}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />
                </div>
                <span className="text-yellow-500">4.2</span>

                <svg
                  width="6px"
                  height="6px"
                  viewBox="0 0 6 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                </svg>

                <span className="text-green-500">Verified</span>
              </div>

              <p className="mb-4 font-semibold text-xl">₹499</p>

              <p className="mb-4 text-gray-500">lorem ipsum</p>

              <div className="flex flex-wrap gap-2 mb-5">
                <button className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                  <i className="fa fa-shopping-cart mr-2"></i>
                  Add to cart
                </button>
              </div>

              <ul className="mb-5">
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Stock</b>
                  <span className="text-green-500">In Stock</span>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Category:</b>
                  <span className="text-gray-500">Toys</span>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">
                    Seller / Brand:
                  </b>
                  <span className="text-gray-500">BabyHug</span>
                </li>
              </ul>
            </main>
          </div>

          <hr />

          <div className="font-semibold">
            <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
              Other Customers Reviews
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
