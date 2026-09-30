# Self-assessment — IA#1

Submitted by: **24120136 — Trần Lê Xuân Tân**

Repository: **[https://github.com/TLXT/wad-cart-starter](https://github.com/TLXT/wad-cart-starter)**

Total I claim: **100 / 100**

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 30 | Hàm trong `src/cart.js` tính tiền hàng bằng tổng `price × qty`, tính VAT trên tiền hàng và xét miễn ship trước VAT. Giỏ rỗng trả `0`; giá âm hoặc số lượng không phải số nguyên dương báo `RangeError`. Hàm chỉ làm tròn tổng cuối bằng `Math.round`. Test mẫu cho kết quả `467400`, đúng với ví dụ trong đề. |
| Tests | 20 | 20 | Em giữ test mẫu trong `test/cart.test.js` và thêm các test theo gợi ý của ChatGPT: giỏ rỗng; dưới, đúng và trên ngưỡng miễn ship; xét ngưỡng trước VAT; giá âm; số lượng bằng 0, âm và thập phân; kiểu kết quả; làm tròn; món giá `0`. Lần Codex chạy kiểm tra lại ngày 2026-09-30 có **15 test đạt, 0 thất bại, 0 bị bỏ qua**. |
| Harness | 20 | 20 | Em dùng hướng dẫn của ChatGPT để tạo `AGENTS.md`, các lệnh `test`, `format:check`, `check` trong `package.json`, file `scripts/check-format.js` và `.github/workflows/ci.yml`. Ảnh `evidence/01-test-red.png` lưu lần test ban đầu thất bại vì hàm chưa được viết. Các commit theo thứ tự dựng harness, viết brief rồi triển khai. Lần Codex chạy lại `npm run check` đã đạt. Em bổ sung link [CI run](https://github.com/TLXT/wad-cart-starter/actions/runs/36664969602) và [job check](https://github.com/TLXT/wad-cart-starter/actions/runs/36664969602/job/109727572985) để dẫn chứng. |
| Brief | 15 | 15 | Trong `BRIEF.md`, em nêu việc cần làm, các file được sửa, đầu vào và kết quả cần trả về. Brief cũng ghi các trường hợp phải báo lỗi, không thêm dependencies, giữ test mẫu, những trường hợp cần test và điều kiện hoàn thành là test cùng gate đều đạt. |
| AI-LOG.md | 15 | 15 | Em ghi lại các lần nhờ AI giải thích đề, dựng harness, viết hàm và test, soạn tài liệu, rồi nhờ Codex đọc lại và kiểm tra cuối. Mỗi mục có `Tool`, `Asked for`, `Kept`, `Changed`, `Rejected`, `By hand`. Em nói rõ phần nào do AI gợi ý và phần nào em tự làm, không nhận code AI gợi ý là code em tự thiết kế. |
| **Total** | **100** | **100** | **30 + 20 + 20 + 15 + 15 = 100**. |

## What I did not manage

Em đã đưa link GitHub Actions vào báo cáo. Tuy nhiên, công cụ của Codex chưa mở được trang để kiểm tra trạng thái CI và xem run đó có đúng với commit cuối em nộp hay không.

Em chưa tự thiết kế thêm logic hoặc test ngoài phần ChatGPT gợi ý. Những dòng chưa hiểu, em đã hỏi lại khi đọc diff và ghi rõ việc dùng AI trong `AI-LOG.md`.

## What I would do differently

Lần sau em sẽ ghi AI-LOG ngay sau mỗi lần nhờ AI, đồng thời lưu ảnh hoặc output khi chạy lệnh. Em cũng sẽ kiểm tra CI của commit cuối sớm hơn để lúc viết báo cáo không phải tìm lại bằng chứng.

## Verification

- Local tests: em từng chạy `npm test` và thấy 15 test đạt. Ngày **2026-09-30**, Codex chạy lại qua `npm run check`, kết quả vẫn là **15 đạt, 0 thất bại, 0 bị bỏ qua**.
- Local gate: Codex chạy `npm run check` — **đạt**, exit code `0`; phần kiểm tra format báo **`Format check passed.`**
- CI run: em cung cấp link [GitHub Actions](https://github.com/TLXT/wad-cart-starter/actions/runs/36664969602) và [job check](https://github.com/TLXT/wad-cart-starter/actions/runs/36664969602/job/109727572985). Công cụ của Codex chưa mở được trang để xác nhận trạng thái run.
- Starter red test: ảnh **`evidence/01-test-red.png`** có **1 test, 0 đạt, 1 thất bại**, với lỗi **`not implemented`**.
- Repository: Codex kiểm tra Git remote `origin`, địa chỉ là **`https://github.com/TLXT/wad-cart-starter.git`**.

Với tổng điểm tự chấm ở trên, em sẽ đặt tên file nộp là **`24120136_100.zip`**.
