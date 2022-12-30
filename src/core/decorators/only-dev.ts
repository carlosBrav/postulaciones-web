export function OnlyDev() {
  return function decorator(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const isDevelopment = import.meta.env.MODE === 'development'
    const { value: originalMethod } = descriptor
    // eslint-disable-next-line no-param-reassign
    descriptor.value = function newMethod(...args: any[]) {
      if (isDevelopment) {
        originalMethod.apply(this, args)
      }
      return null
    }
  }
}
