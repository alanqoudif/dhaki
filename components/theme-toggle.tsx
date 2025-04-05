<DropdownMenu>
    <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">تغيير المظهر</span>
        </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
            فاتح ☀️
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
            داكن 🌙
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
            تلقائي 🖥️
        </DropdownMenuItem>
    </DropdownMenuContent>
</DropdownMenu> 