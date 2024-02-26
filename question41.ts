function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Doug Henning', 'Dai Vernon'];
show_magicians(magicians);