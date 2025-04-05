/* eslint-disable @next/next/no-img-element */
"use client";

import { GithubLogo, XLogo } from '@phosphor-icons/react';
import { Bot, Brain, Command, GraduationCap, Image, Search, Share2, Sparkles, Star, Trophy, Users, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TextLoop } from '@/components/core/text-loop';
import { TextShimmer } from '@/components/core/text-shimmer';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import NextImage from 'next/image';
import { ArrowRight } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function About() {
    const router = useRouter();
    const [showWarning, setShowWarning] = useState(false);
    
    useEffect(() => {
        // Check if user has seen the warning
        const hasSeenWarning = localStorage.getItem('hasSeenWarning');
        if (!hasSeenWarning) {
            setShowWarning(true);
        }
    }, []);

    const handleDismissWarning = () => {
        setShowWarning(false);
        localStorage.setItem('hasSeenWarning', 'true');
    };

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get('query')?.toString();
        if (query) {
            router.push(`/?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
            <div className="mx-auto max-w-2xl px-4 py-12 font-tajawal">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6" data-v0-t="card">
                    <div className="flex flex-col space-y-1.5 pb-6">
                        <h1 className="text-2xl font-semibold leading-none tracking-tight text-center">
                            مرحباً بك في ذكي 🤖
                        </h1>
                        <p className="text-sm text-muted-foreground text-center">
                            محرك بحث ذكي مدعوم بالذكاء الاصطناعي
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">ما هو ذكي؟</h2>
                            <p className="text-sm text-muted-foreground">
                                ذكي هو محرك بحث متقدم يجمع بين قوة الذكاء الاصطناعي وتقنية RAG (Retrieval Augmented Generation) للبحث المتقدم. يمكنك استخدامه للحصول على إجابات دقيقة ومدعومة بالمصادر لأي سؤال.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">المميزات الرئيسية</h2>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                <li>بحث ذكي مدعوم بالذكاء الاصطناعي</li>
                                <li>دعم للغة العربية والإنجليزية</li>
                                <li>تقنية RAG للبحث المتقدم</li>
                                <li>إجابات مدعومة بالمصادر</li>
                                <li>واجهة مستخدم سهلة وبسيطة</li>
                                <li>تحديثات مستمرة وتحسينات دورية</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">كيف يعمل؟</h2>
                            <p className="text-sm text-muted-foreground">
                                يستخدم ذكي تقنيات الذكاء الاصطناعي المتقدمة للبحث في مصادر متعددة وتقديم إجابات دقيقة ومفيدة. يمكنك طرح أي سؤال وسيقوم ذكي بتحليله والبحث عن أفضل الإجابات من مصادر موثوقة.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Link href="/">
                                <Button className="gap-2">
                                    جرب الآن
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 