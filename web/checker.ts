export interface APIInterface {
  name: string;
  properties: Array<string>;
  methods: Array<string>;
  //events: Array<string>;
}

export const check = (api: APIInterface) => {
  const {name, properties, methods} = api;
  const propertiesAvailable = properties.filter(property => window[name].prototype.hasOwnProperty(property));
  const methodsAvailable = methods.filter(property => window[name].prototype.hasOwnProperty(property));

  return {
    name,
    properties: propertiesAvailable,
    methods: methodsAvailable,
  };
};


