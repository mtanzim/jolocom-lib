import { ContextEntry } from 'cred-types-jolocom-core'

export const defaultContext: ContextEntry[] = [
  'https://w3id.org/identity/v1',
    {
      proof: 'https://w3id.org/security#proof'
    }
]

export const defaultContextIdentity: ContextEntry[] = [
  {
    id: '@id',
    type: '@type',
    dc: 'http://purl.org/dc/terms/',
    rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
    schema: 'http://schema.org/',
    sec: 'https://w3id.org/security#',
    didv: 'https://w3id.org/did#',
    xsd: 'http://www.w3.org/2001/XMLSchema#',

    AuthenticationSuite: 'sec:AuthenticationSuite',
    CryptographicKey: 'sec:Key',
    LinkedDataSignature2016: 'sec:LinkedDataSignature2016',

    authentication: 'sec:authenticationMethod',
    created: {'@id': 'dc:created', '@type': 'xsd:dateTime'},
    creator: {'@id': 'dc:creator', '@type': '@id'},
    digestAlgorithm: 'sec:digestAlgorithm',
    digestValue: 'sec:digestValue',
    domain: 'sec:domain',
    entity: 'sec:entity',
    expires: {'@id': 'sec:expiration', '@type': 'xsd:dateTime'},
    name: 'schema:name',
    nonce: 'sec:nonce',
    normalizationAlgorithm: 'sec:normalizationAlgorithm',
    owner: {'@id': 'sec:owner', '@type': '@id'},
    privateKey: {'@id': 'sec:privateKey', '@type': '@id'},
    proof: 'sec:proof',
    proofAlgorithm: 'sec:proofAlgorithm',
    proofType: 'sec:proofType',
    proofValue: 'sec:proofValue',
    publicKey: {'@id': 'sec:publicKey', '@type': '@id', '@container': '@set'},
    requiredProof: 'sec:requiredProof',
    revoked: {'@id': 'sec:revoked', '@type': 'xsd:dateTime'},
    signature: 'sec:signature',
    signatureAlgorithm: 'sec:signatureAlgorithm',
    signatureValue: 'sec:signatureValue'
  }
]
