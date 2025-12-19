class RandomCodeADV {
    getInfo() {
        return {
            id: 'randomcodeadv',
            name: 'Random Code ADV',
            blocks: [
                {
                    opcode: 'generate',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'générer code aléatoire longueur [LEN]',
                    arguments: {
                        LEN: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 12
                        }
                    }
                },
                {
                    opcode: 'generateCustom',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'générer code [MIN] [MAJ] [NUM] longueur [LEN]',
                    arguments: {
                        MIN: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: true },
                        MAJ: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: false },
                        NUM: { type: Scratch.ArgumentType.BOOLEAN, defaultValue: true },
                        LEN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 12 }
                    }
                }
            ]
        };
    }

    generate(args) {
        return this._gen(true, false, true, args.LEN);
    }

    generateCustom(args) {
        return this._gen(args.MIN, args.MAJ, args.NUM, args.LEN);
    }

    _gen(min, maj, num, len) {
        let chars = '';
        if (min) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (maj) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (num) chars += '0123456789';

        if (!chars || len <= 0) return '';

        let out = '';
        for (let i = 0; i < len; i++) {
            out += chars[Math.floor(Math.random() * chars.length)];
        }
        return out;
    }
}

Scratch.extensions.register(new RandomCodeADV());
