// /lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Globe, Book, YoutubeIcon, Mountain, Brain } from 'lucide-react'
import { ChatsCircle, Code, Memory, XLogo } from '@phosphor-icons/react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 15)}`;
}

export function getUserId(): string {
  if (typeof window === 'undefined') return '';
  
  let userId = localStorage.getItem('mem0_user_id');
  if (!userId) {
    userId = generateId('user');
    localStorage.setItem('mem0_user_id', userId);
  }
  return userId;
}

export type SearchGroupId = 'web' | 'academic' | 'youtube' | 'x' | 'analysis' | 'chat' | 'extreme' | 'buddy';

export const searchGroups = [
  {
    id: 'web' as const,
    name: 'الويب 🌐',
    description: 'البحث في جميع أنحاء الإنترنت',
    icon: Globe,
    show: true,
  },
  {
    id: 'buddy' as const,
    name: 'المساعد 🤝',
    description: 'رفيقك الشخصي للذاكرة',
    icon: Memory,
    show: true,
  },
  {
    id: 'x' as const,
    name: 'إكس 🐦',
    description: 'البحث في منشورات إكس ومحتواها',
    icon: XLogo,
    show: true,
  },
  {
    id: 'analysis' as const,
    name: 'التحليل 📊',
    description: 'تحليل الكود والأسهم والعملات',
    icon: Code,
    show: true,
  },
  {
    id: 'chat' as const,
    name: 'المحادثة 💭',
    description: 'التحدث مع النموذج مباشرة',
    icon: ChatsCircle,
    show: true,
  },
  {
    id: 'academic' as const,
    name: 'الأكاديمي 📚',
    description: 'البحث في الأوراق العلمية',
    icon: Book,
    show: true,
  },
  {
    id: 'youtube' as const,
    name: 'يوتيوب 📺',
    description: 'البحث في مقاطع يوتيوب',
    icon: YoutubeIcon,
    show: true,
  },
  {
    id: 'extreme' as const,
    name: 'متقدم 🚀',
    description: 'بحث عميق مع مصادر وتحليلات متعددة',
    icon: Mountain,
    show: false,
  },
] as const;

export type SearchGroup = typeof searchGroups[number];
