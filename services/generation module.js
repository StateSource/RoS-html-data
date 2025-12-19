class Random12Extension {
    getInfo() {
        return {
            id: 'random12',
            name: 'ADV Variables',
            blocks: [
                {
                    opcode: 'generate',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'générer code aléatoire (12 caractères)'
                }
            ]
        };
    }

    generate() {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 12; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }
}

Scratch.extensions.register(new Random12Extension());
