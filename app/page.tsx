'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Rest of your code remains the same 