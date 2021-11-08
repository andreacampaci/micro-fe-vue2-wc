import { Vue, Component } from 'vue-property-decorator';

@Component
export class LoadComponentMixin extends Vue {
    // elenco delle micro applicazioni
    protected appsUrl: Array<string> =  [];

    public mounted() {
        (window as any).appsRegisterd = (window as any).appsRegisterd || []; // può essere sostituito con uno state manager

        this.appsUrl.forEach(appUrl => {
            // previene l'aggiunta del file due volte,
            // dato che si tratta di un web component la registrazione deve avvenire una volta sola, altrimenti avremo un errore in console
            if (!(window as any).appsRegisterd.includes(appUrl)) {
                const node = document.createElement('script');
                const timestamp = Math.floor(Date.now() / 1000); // timestamp per gestire il cache busting
                node.src = `apps/${appUrl}/${appUrl}.min.js?v=${timestamp}`;
                node.type = "text/javascript";
                document
                    .querySelector('html>head')
                    ?.appendChild(node);
                (window as any).appsRegisterd = [...(window as any).appsRegisterd, appUrl];
            }
        })

    }
}
