"use client";
import React from 'react';
import Banner from './Banner';
import bannerConfig from './bannerConfig';
import { usePathname } from 'next/navigation';

const BannerClient = () => {
   const pathname = usePathname();
  const bannerData = bannerConfig[pathname];

  if (!bannerData) return null;

  return <Banner {...bannerData} />;
};

export default BannerClient;