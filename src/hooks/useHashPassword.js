const useHashPassword = async({password}) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashedBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashedBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default useHashPassword
