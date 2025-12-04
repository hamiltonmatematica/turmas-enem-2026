import { LucideIcon } from 'lucide-react';

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface PricingCardProps {
  id: string;
  title: string;
  subtitle: string;
  priceCash: string;
  priceInstallment: string;
  recommended: boolean;
  features: string[];
}

export interface ContactCardProps {
  name: string;
  role: string;
  desc: string;
  link: string;
  btnText: string;
}