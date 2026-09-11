import React from 'react';
import styles from './UriagePrivacyPolicy.module.css';

const storedItems = [
  '商品名',
  '販売価格',
  '販売日',
  'カテゴリー',
  '販売手数料',
  '送料',
  '梱包費',
  '原価',
  'その他費用',
  'タグ、メモ',
  '商品URL',
  '資材名、資材種別、購入金額、数量、購入日、メモ',
  '通貨設定、手数料率、送料などのアプリ設定',
];

const UriagePrivacyPolicy: React.FC = () => {
  return (
    <main className={styles.page}>
      <article className={styles.container}>
        <a className={styles.backLink} href="/">
          作った人のPortfolioへ
        </a>

        <header className={styles.header}>
          <span className={styles.eyebrow}>URIAGE</span>
          <h1 className={styles.title}>プライバシーポリシー</h1>
          <p className={styles.lead}>
            URIAGE（以下「本アプリ」といいます）は、利用者のプライバシーを尊重し、利用者が安心して本アプリを利用できるよう、以下のとおりプライバシーポリシーを定めます。
          </p>
        </header>

        <div className={styles.sections}>
          <section className={styles.section}>
            <h2 className={styles.heading}>1. 取得・保存する情報</h2>
            <p className={styles.paragraph}>
              本アプリでは、利用者が入力した以下の情報を、売上・費用・利益の記録および表示のために利用します。
            </p>
            <ul className={styles.list}>
              {storedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.paragraph}>
              これらの情報は、原則として利用者の端末内に保存されます。開発者がこれらの情報を取得、閲覧、外部サーバーに保存することはありません。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>2. 商品URL読み込み機能について</h2>
            <p className={styles.paragraph}>
              本アプリには、利用者が入力または貼り付けた商品URLから、商品名や価格を取得する機能があります。
            </p>
            <p className={styles.paragraph}>
              この機能を利用する場合、本アプリは入力された商品URLの商品ページにアクセスし、商品ページ上の情報を読み取ります。この際、商品ページを提供する外部サービスに対して通信が行われる場合があります。
            </p>
            <p className={styles.paragraph}>
              外部サービス側で取得される可能性のある情報については、各外部サービスのプライバシーポリシーをご確認ください。本アプリおよび開発者は、外部サービスによる情報の取得、利用、管理について責任を負いません。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. クリップボードの利用について</h2>
            <p className={styles.paragraph}>
              本アプリでは、利用者が「貼り付け」操作を行った場合に限り、端末のクリップボード内の文字列を読み取り、商品URL入力欄に反映します。
            </p>
            <p className={styles.paragraph}>
              クリップボードの内容を自動的に収集したり、開発者または外部サーバーへ送信したりすることはありません。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>4. 第三者提供について</h2>
            <p className={styles.paragraph}>
              開発者は、本アプリに入力された情報を第三者に販売、共有、提供することはありません。
            </p>
            <p className={styles.paragraph}>
              ただし、法令に基づき開示が求められた場合には、必要な範囲で情報を開示する場合があります。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>5. 広告・解析ツールについて</h2>
            <p className={styles.paragraph}>
              本アプリでは、広告配信サービス、アクセス解析ツール、行動追跡ツールを使用していません。
            </p>
            <p className={styles.paragraph}>
              また、利用者を追跡する目的でIDFAなどの広告識別子を取得・利用することはありません。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>6. データの管理について</h2>
            <p className={styles.paragraph}>
              本アプリに入力されたデータは、利用者の端末内に保存されます。端末の故障、紛失、アプリの削除、OSの更新、バックアップ設定その他の事情によりデータが失われる可能性があります。
            </p>
            <p className={styles.paragraph}>重要な情報については、利用者自身の責任で管理してください。</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>7. 外部リンクについて</h2>
            <p className={styles.paragraph}>
              本アプリ内には、外部ウェブサイトへのリンクが含まれる場合があります。外部ウェブサイトで提供されるサービスや情報の取り扱いについては、各ウェブサイトのプライバシーポリシーをご確認ください。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>8. 免責事項</h2>
            <p className={styles.paragraph}>
              本アプリは、売上、費用、利益などを記録・確認するための補助ツールです。本アプリに入力された内容、計算結果、外部サービスから取得した情報の正確性、完全性、有用性を保証するものではありません。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>9. プライバシーポリシーの変更</h2>
            <p className={styles.paragraph}>
              本プライバシーポリシーは、必要に応じて変更されることがあります。変更後の内容は、本アプリ内または開発者が指定する方法で表示された時点から適用されます。
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>10. お問い合わせ</h2>
            <p className={styles.paragraph}>
              本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
            </p>
            <p className={styles.contact}>
              お問い合わせ先：
              <br />
              <a href="mailto:mamezhlf@gmail.com">mamezhlf@gmail.com</a>
            </p>
            <p className={styles.date}>制定日：2026年9月12日</p>
          </section>
        </div>
      </article>
    </main>
  );
};

export default UriagePrivacyPolicy;
