import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Loader2, Search } from "lucide-react";
import { useRef, useState } from "react";

interface SearchBoxProps {
    onSubmit: (query: string) => void;
    isLoading?: boolean;
}

export function SearchBox({ onSubmit, isLoading = false }: SearchBoxProps) {
    const [input, setInput] = useState("");

    return (
        <div className="relative flex items-center">
            <Input
                value={input}
                placeholder="اسأل أي سؤال... 💭"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        if (input.trim()) {
                            onSubmit(input.trim());
                        }
                    }
                }}
                className="pr-32 font-normal"
            />
            <div className="absolute right-2 flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setInput("")}
                    disabled={!input}
                    className="h-8 w-8"
                >
                    <X className="h-4 w-4" />
                </Button>
                <Button
                    onClick={() => {
                        if (input.trim()) {
                            onSubmit(input.trim());
                        }
                    }}
                    disabled={!input || isLoading}
                    className="h-8 px-3 text-xs rounded-full"
                >
                    {isLoading ? (
                        <div className="flex items-center gap-1">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            <span>جاري البحث...</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <Search className="h-3 w-3" />
                            <span>بحث</span>
                        </div>
                    )}
                </Button>
            </div>
        </div>
    );
} 