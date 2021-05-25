import { Vue, Component, Watch } from 'vue-property-decorator'
import { parse, ParsedQuery, stringify } from 'query-string'
import { LogComputed } from './log'

@Component
export default class extends Vue {
  hash: string = window.location.hash

  @LogComputed
  get hashObject(): ParsedQuery<string> {
    return parse(this.hash)
  }

  setHashObject(value: Record<string, any>, replace: any = false): void {
    this.hash = replace ? this.stringify(value) : this.stringify({ ...this.hashObject, ...value })
  }

  stringify(hashObject: ParsedQuery<string> = this.hashObject) {
    return `#${stringify(hashObject)}`
  }

  protected created(): void {
    window.addEventListener('hashchange', () => this.onHashChange())
  }

  private onHashChange(): void {
    this.hash = window.location.hash
  }

  @Watch('hash')
  private onHashPropChange(value: string): void {
    window.location.hash = value
  }
}
