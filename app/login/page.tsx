"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function LoginPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="page">
      <div className="card">
        <header className="header">
          <p className="eyebrow">PRIVATE COACHING</p>
          <h1 className="title">UPGRADE</h1>
        </header>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="field-label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </div>

          <div className="field">
            <div className="field-label-row">
              <label className="field-label" htmlFor="password">
                Password
              </label>
              <Link className="link subtle" href="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <input
              className="input"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="primary-button">
            Continue
          </button>
        </form>

        <div className="divider" role="separator" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-label">or</span>
          <span className="divider-line" />
        </div>

        <div className="actions">
          <button className="secondary-button" type="button">
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.333 10.2c0-2.132 1.282-3.077 1.335-3.114-.72-1.05-1.835-1.192-2.235-1.208-1.038-.107-2.02.62-2.55.62-.532 0-1.4-.604-2.312-.587-1.185.018-2.274.704-2.873 1.78-1.226 2.123-.313 5.27.88 7.005.6.842 1.306 1.785 2.236 1.751.9-.038 1.235-.567 2.322-.567 1.085 0 1.386.567 2.312.55.956-.02 1.557-.858 2.132-1.704.696-.99.984-1.947.998-1.997-.02-.008-1.917-.736-1.945-2.53Z" />
                <path d="M13.47 3.9c.48-.6.806-1.43.72-2.26-.695.024-1.53.463-2.026 1.062-.443.512-.827 1.35-.727 2.156.768.06 1.555-.39 2.033-.958Z" />
              </svg>
            </span>
            <span>Continue with Apple</span>
          </button>

          <button className="secondary-button" type="button">
            <span className="icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.5c1.357 0 2.577.47 3.537 1.388l2.643-2.643C16.739 2.28 14.6 1.5 12 1.5c-3.73 0-6.903 2.131-8.485 5.24l3.21 2.49C7.485 6.687 9.558 5.5 12 5.5Z" />
                <path d="M21.53 12.227c0-.692-.062-1.357-.178-1.997H12v3.774h5.33c-.23 1.177-.92 2.175-1.95 2.846l3.034 2.356c1.778-1.644 2.816-4.064 2.816-6.98Z" />
                <path d="M6.733 14.845a6.476 6.476 0 0 1-.354-2.097c0-.73.137-1.43.354-2.097l-3.21-2.49A10.476 10.476 0 0 0 1.5 12.748c0 1.76.43 3.41 1.18 4.883l4.053-2.786Z" />
                <path d="M12 22.5c2.6 0 4.793-.86 6.391-2.342l-3.034-2.356c-.835.56-1.902.893-3.357.893-2.442 0-4.514-1.188-5.776-3.05l-4.054 2.786C5.097 20.37 8.27 22.5 12 22.5Z" />
              </svg>
            </span>
            <span>Continue with Google</span>
          </button>
        </div>

        <footer className="footer">
          <p className="footer-text">
            New here? <Link className="link" href="/signup">Create an account</Link>
          </p>
          <p className="footer-text">
            <Link className="link" href="/passkey">Sign in with Face ID / passkey</Link>
          </p>
        </footer>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: #f9f5f0;
          color: #111;
        }

        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 16px;
        }

        .card {
          width: min(420px, 100%);
          background: #fff;
          border-radius: 28px;
          padding: 48px 40px 40px;
          box-shadow: 0 30px 70px rgba(17, 24, 39, 0.12);
          display: flex;
          flex-direction: column;
          gap: 28px;
          text-align: center;
        }

        .header {
          display: flex;
          flex-direction: column-reverse;
          gap: 8px;
        }

        .title {
          font-size: 32px;
          letter-spacing: 0.35em;
          margin: 0;
        }

        .eyebrow {
          margin: 0;
          font-size: 13px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
          font-size: 14px;
        }

        .field-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .field-label {
          display: inline-block;
          text-transform: none;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #262626;
        }

        .input {
          height: 54px;
          padding: 0 18px;
          border-radius: 16px;
          border: 1px solid #d8d6d1;
          font-size: 15px;
          background: #fbf9f6;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .input:focus {
          outline: none;
          border-color: #111;
          box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.08);
        }

        .primary-button {
          margin-top: 4px;
          height: 56px;
          border-radius: 16px;
          border: none;
          background: #111;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .primary-button:hover,
        .primary-button:focus-visible {
          transform: translateY(-1px);
          box-shadow: 0 12px 24px rgba(17, 17, 17, 0.2);
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #94918b;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.24em;
        }

        .divider-label {
          line-height: 1;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: #e3dfd8;
        }

        .actions {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .secondary-button {
          height: 56px;
          border-radius: 16px;
          border: 1px solid #d8d6d1;
          background: #fff;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
        }

        .secondary-button:hover,
        .secondary-button:focus-visible {
          border-color: #bfbab0;
          background: #f8f6f2;
          transform: translateY(-1px);
        }

        .icon {
          display: inline-flex;
          width: 20px;
          height: 20px;
        }

        .icon svg {
          width: 100%;
          height: 100%;
          fill: currentColor;
        }

        .link {
          color: #111;
          font-weight: 600;
          text-decoration: none;
        }

        .link:hover,
        .link:focus-visible {
          text-decoration: underline;
        }

        .link.subtle {
          font-weight: 500;
          font-size: 13px;
          color: #6b6a67;
        }

        .footer {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #5a5854;
          font-size: 14px;
        }

        .footer-text {
          margin: 0;
        }

        @media (max-width: 480px) {
          .card {
            padding: 40px 24px 32px;
            border-radius: 24px;
          }

          .title {
            font-size: 28px;
            letter-spacing: 0.28em;
          }
        }
      `}</style>
    </div>
  );
}
