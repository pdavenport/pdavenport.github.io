import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const nicky = localFont({
  src: "./Nicky-Regular.woff2",
  display: "swap",
});

export const palmore = localFont({
  src: "./PalmoreSemibold.woff2",
  display: "swap",
});

// src: [
//   {
//     path: './Roboto-Regular.woff2',
//     weight: '400',
//     style: 'normal',
//   },
//   {
//     path: './Roboto-Italic.woff2',
//     weight: '400',
//     style: 'italic',
//   },
//   {
//     path: './Roboto-Bold.woff2',
//     weight: '700',
//     style: 'normal',
//   },
//   {
//     path: './Roboto-BoldItalic.woff2',
//     weight: '700',
//     style: 'italic',
//   },
