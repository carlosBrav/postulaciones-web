import forge from "node-forge";

class SecureToken {

  static encodeToken = (key: string): string => {
    return forge.util.encode64(key) || ""
  }

  static decodeToken = (key: string): string => {
    return forge.util.decode64(key) || ""
  }
}

export default SecureToken