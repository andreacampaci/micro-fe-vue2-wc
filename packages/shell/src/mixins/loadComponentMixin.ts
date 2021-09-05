import { Vue, Component } from 'vue-property-decorator';

@Component
export class LoadComponentMixin extends Vue {
    protected appsUrl: Array<string> =  [];
    public mounted() {
        (window as any).appsRegisterd = (window as any).appsRegisterd || [];
        this.appsUrl.forEach(appUrl => {
            if (!(window as any).appsRegisterd.includes(appUrl)) {
                const node = document.createElement('script');
                const timestamp = Math.floor(Date.now() / 1000);
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
