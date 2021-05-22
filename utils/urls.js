export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_23CEEF76C9E9EF5B'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51ItrQxJVbc7eQTPs2PapgY708atX7XT0o5GcGXeQ5EofaGFT4KEoQ7xB4iEkV0e7tImmTNC7M7m06is6XAa3nIzm00Dio5IDdR'

/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image 
 */
export const fromImageToUrl = (image) => {
    if (!image) {
      return "/vercel.svg"; //Or default image here
    }
    if (image.url.indexOf("/") === 0) {
      //It's a relative url, add API URL
      return `${API_URL}${image.url}`;
    }
  
    return image.url;
};