class ImportJson {
    getInfo() {
        return {
            id: 'importjson',
            name: 'Importer JSON',
            blocks: [
                {
                    opcode: 'loadJson',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'charger JSON url [URL]'
                }
            ]
        };
    }
  
    loadJson(args) {
        return fetch(args.URL)
            .then(res => res.json())
            .then(json => JSON.stringify(json))
            .catch(() => 'Erreur JSON');
    }
}

Scratch.extensions.register(new ImportJson());
