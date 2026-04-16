"use client"
import config from "@/config";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  async function fetchTasks() {
    const data = await fetch(config.BACKEND_ENDPOINT);
    console.log(await data.json())
  }
  useEffect(() => {
    fetchTasks()
  }, []);

  return (
    <div >

    </div>
  );
}
