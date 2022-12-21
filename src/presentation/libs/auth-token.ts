const store = localStorage;
class AuthToken {

  static getToken(key: string): string | null {
		return store.getItem(key);
	}

	static setToken(keyToken: string, token: string): void {
		if (token) store.setItem(keyToken, token);
		else store.removeItem(keyToken);
	}

	static deleteToken(keyToken: string): void {
		store.removeItem(keyToken);
	}
}

export default AuthToken