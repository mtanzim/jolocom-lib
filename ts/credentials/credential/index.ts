import { classToPlain, plainToClass, Exclude, Expose } from 'class-transformer'
import { IClaimAttrs, IClaimMetadata, ICredentialAttrs, ICredentialCreateAttrs } from './types'

@Exclude()
export class Credential {
  @Expose()
  private '@context': string[] | object[]

  @Expose()
  private type: string[]

  @Expose()
  private claim: IClaimAttrs

  @Expose()
  private name: string

  public static create(attrs: ICredentialCreateAttrs): Credential {
    const credential = new Credential()
    const metadata = attrs.metadata
    credential['@context'] = metadata.context
    credential.type = metadata.type
    credential.name = metadata.name
    credential.claim = {
      id: attrs.subject,
      [metadata.fieldName]: attrs.value
    }

    return credential
  }

  public getClaim(): IClaimAttrs {
    return this.claim
  }

  public getType(): string[] {
    return this.type
  }

  public getName(): string {
    return this.name
  }

  public getContext(): string[] | object[] {
    return this['@context']
  }

  public static fromJSON(json: ICredentialAttrs): Credential {
    return plainToClass(Credential, json)
  }

  public toJSON(credential: Credential): ICredentialAttrs {
    return classToPlain(this) as ICredentialAttrs
  }
}
