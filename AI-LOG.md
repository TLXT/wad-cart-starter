# AI-LOG - IA#1 cartTotal

## 2026-09-28 - Dịch và hiểu đề

Tool: ChatGPT.

Asked for: Dịch đề sang tiếng Việt, giải thích cách tính tiền, ví dụ trên slide, rubric và đưa ra thứ tự làm bài.

Kept: Tiền hàng là tổng `price × qty`. VAT tính trên tiền hàng, còn miễn ship xét theo tiền hàng trước VAT. Tổng thanh toán chỉ được làm tròn ở cuối. Giỏ rỗng trả `0`; giá âm và `qty` không hợp lệ phải báo `RangeError`. Ví dụ mẫu có tổng `467400`.

Changed: Vì chưa quen các công cụ này, em hỏi thêm Node.js, npm, harness và lệnh `check` là gì. Em không thay đổi yêu cầu của đề.

Rejected: Ở bước này em không bỏ gợi ý nào.

By hand: Em cài và kiểm tra công cụ, rồi clone repository về máy. Ở bước này em chưa viết code.

## 2026-09-29 - Dựng harness

Tool: ChatGPT, VS Code, Git Bash, npm.

Asked for: Cách tạo `AGENTS.md`, script kiểm tra format, các lệnh trong `package.json` và file CI. Em cũng hỏi vì sao cần `check` khi đã có `test`, rồi nhờ giải thích các lỗi hiện trên terminal.

Kept: Em dùng `test` để chạy test, `format:check` để kiểm tra tab, khoảng trắng cuối dòng và newline cuối file; `check` chạy cả hai lệnh. Nội dung rules và CI được lấy từ gợi ý của ChatGPT.

Changed: Lúc đầu em chạy npm ở thư mục `H1` nên không tìm thấy `package.json`; em chuyển vào `wad-cart-starter`. Sau đó em thêm newline vào cuối `scripts/check-format.js`, `package.json` và `.github/workflows/ci.yml` theo thông báo của script. Em cũng sửa lệnh gõ nhầm `npm.cdm` thành `npm`.

Rejected: Em đã thử nhấn Enter ở cuối file trong VS Code nhưng chạy lại vẫn báo thiếu newline. Vì vậy, em chuyển sang cách bổ sung newline bằng Git Bash được hướng dẫn sau đó.

By hand: Em tự chạy lệnh, gửi lại lỗi gặp phải, sửa newline và chạy `git add`. Git có cảnh báo LF/CRLF ở một số file. Phần code harness là gợi ý của ChatGPT, không phải code em tự thiết kế.

## 2026-09-30 - Viết hàm và test

Tool: ChatGPT, VS Code, Node.js test runner, Git Bash.

Asked for: Cách viết `cartTotal`, những trường hợp nên test, lý do `npm test` không in tổng tiền, và cách đọc từng phần của diff.

Kept: Em giữ test mẫu `the example from the slides`. Hàm theo gợi ý của ChatGPT xử lý giỏ rỗng, kiểm tra giá và `qty`, cộng tiền hàng, tính VAT và ship, rồi làm tròn một lần. Em cũng dùng các test được gợi ý cho ngưỡng miễn ship, dữ liệu sai, kiểu kết quả, làm tròn và món giá `0`.

Changed: Em không sửa logic so với đoạn code được gợi ý. Khi đọc diff, em kiểm tra lại `subtotal >= freeShipFrom` vì đúng ngưỡng phải được miễn ship, và `Math.round` ở cuối vì làm tròn từng món sẽ sai.

Rejected: Trong diff đã chia sẻ, em không bỏ phần code hoặc test nào được gợi ý.

By hand: Em chạy `npm test`: **15 test đạt, 0 thất bại, 0 bị bỏ qua**. Em mở `git diff -- src/cart.js test/cart.test.js` và hỏi lại những dòng chưa hiểu. Em chưa tự thiết kế thêm logic hoặc test khác với gợi ý của ChatGPT.

## 2026-09-30 - Viết AI-LOG và báo cáo tự đánh giá

Tool: ChatGPT; mẫu `SELF_ASSESSMENT_REPORT template.docx` của giảng viên.

Asked for: Viết AI-LOG theo những việc em đã làm, thêm phần dịch đề, rồi đọc mẫu Word để tạo `SELF_ASSESSMENT_REPORT.md`.

Kept: Em dùng đúng các mục `Tool`, `Asked for`, `Kept`, `Changed`, `Rejected`, `By hand`. Báo cáo tự đánh giá có năm tiêu chí, bằng chứng cho từng tiêu chí và phần nêu những việc còn thiếu.

Changed: Bản AI-LOG đầu còn chung chung, nên em yêu cầu viết lại bằng lời dễ hiểu hơn và nói rõ phần nào do ChatGPT gợi ý, phần nào em tự làm.

Rejected: Em bỏ cách viết chung chung của bản nháp đầu. Em cũng không điền kết quả gate, link CI hay ảnh test đỏ như thể đã có, vì em chưa cung cấp được các bằng chứng đó.

By hand: Em đưa output test, diff và file mẫu cho ChatGPT. ChatGPT soạn văn bản; em sẽ đối chiếu lại với repository và tự điền MSSV, điểm tự chấm, kết quả `npm run check`, link CI và minh chứng test đỏ trước khi nộp.

## 2026-09-30 - Nhờ Codex đọc lại, chấm điểm và kiểm tra lần cuối

Tool: Codex.

Asked for: Đọc lại project, chấm điểm theo yêu cầu đề bài gửi kèm và các tiêu chí trong báo cáo tự đánh giá; nhờ AI kiểm tra lại lần cuối trước khi nộp.

Kept: Codex đọc các file trong project, xem minh chứng test đỏ và lịch sử commit, chạy `npm run check` với kết quả **15 test đạt, 0 thất bại, 0 bị bỏ qua**, kiểm tra format đạt. Em dùng phần nhận xét và báo cáo tự đánh giá do Codex hỗ trợ soạn.

Changed: Em nhờ Codex điền báo cáo vào `SELF_ASSESSMENT_REPORT.md`, bổ sung link CI em cung cấp và ghi lại lần hỗ trợ này vào AI-LOG.

Rejected: Không có đề xuất về code hoặc test bị từ chối trong lần kiểm tra cuối.

By hand: Em gửi yêu cầu đề bài, bố cục báo cáo, thông tin sinh viên và link GitHub Actions; yêu cầu sửa nhận xét cho đúng thực tế. Codex thực hiện việc đọc file, chạy gate, hỗ trợ chấm điểm và cập nhật tài liệu; em không nhận các thao tác này là tự thực hiện. Công cụ của Codex chưa tải được trang CI để xác minh trạng thái run.
