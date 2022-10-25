import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AboutAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion sx={{backgroundColor: "#50769a", color:"#fff"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#fff"}} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"500", textAlign:"left",textAlign:"left" }}>
            GIỚI THIỆU
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align='left'>
            Bảo hiểm bắt buộc trách nhiệm dân sự của (TNDS) chủ xe cơ giới là loại hình bảo hiểm bắt buộc do Nhà nước quy định.
            Tất cả các chủ xe cơ giới cá nhân tổ chức (bao gồm người nước ngoài) sở hữu xe cơ giới tại Việt Nam đều phải tham gia nhằm bảo vệ và đảm bảo quyền lợi cho bên thứ ba
            nếu không may bị thiệt hại về người và tài sản do tai nạn giao thông gây ra.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "#50769a", color:"#fff"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#fff"}} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"500", textAlign:"left" }}>ĐỐI TƯỢNG ÁP DỤNG</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography align='left'>
            Chủ xe cơ giới tham gia giao thông và hoạt động trên lãnh thổ nước Cộng hòa xã hội chủ nghĩa Việt Nam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "#50769a", color:"#fff"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#fff"}} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"500", textAlign:"left" }}>
            THỜI HẠN VÀ HIỆU LỰC BẢO HIỂM
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li><Typography align='left'>
              Hiệu lực bảo hiểm bắt đầu và kết thúc theo thời hạn ghi trên Giấy chứng nhận bảo hiểm.
            </Typography></li>
            <li><Typography align='left'>
              Đối với xe mô tô hai bánh, ba bánh, xe gắn máy (kể cả xe máy điện) và các loại xe có kết cấu tương tự theo quy định của Luật Giao thông đường bộ, thời hạn Bảo hiểm tối thiểu là 1 năm và tối đa là 3 năm.
            </Typography></li>
            <li><Typography align='left'>
              Trong thời hạn còn hiệu lực ghi trên Giấy chứng nhận bảo hiểm,mnếu có sự chuyển quyền sở hữu xe cơ giới, mọi quyền lợi bảo hiểm liên quan đến trách nhiệm dân sự của chủ xe cơ giới cũ vẫn còn hiệu lực đối với chủ xe cơ giới mới.
            </Typography></li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "#50769a", color:"#fff"}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"#fff"}} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:"500", textAlign:"left" }}>BỒI THƯỜNG</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li><Typography align='left'>Thời hạn yêu cầu bồi thường là 1 năm kể từ ngày xảy ra tai nạn, trừ trường hợp chậm trễ do nguyên nhân khách quan và bất khả kháng theo quy định của pháp luật.
            </Typography></li>
            <li><Typography align='left'>Trong thời hạn 5 ngày làm việc kể từ ngày xảy ra tai nạn (trừ trường hợp bất khả kháng), bên mua bảo hiểm, người được bảo hiểm phải gửi thông báo tai nạn bằng văn bản hoặc thông qua hình thức điện tử cho doanh nghiệp bảo hiểm.
            </Typography></li>
            <li><Typography align='left'>Thời hạn thanh toán bồi thường của doanh nghiệp bảo hiểm là 15 ngày kể từ khi nhận được đầy đủ hồ sơ yêu cầu bồi thường bảo hiểm hợp lệ và không quá 30 ngày kể từ khi nhận được đầy đủ hồ sơ yêu cầu bồi thường bảo hiểm hợp lệ trong trường hợp phải tiến hành xác minh hồ sơ.
            </Typography></li>
            <li><Typography align='left'>Trường hợp từ chối bồi thường, doanh nghiệp bảo hiểm phải thông báo bằng văn bản cho bên mua bảo hiểm, người được bảo hiểm biết lý do từ chối bồi thường trong thời hạn 30 ngày kể từ ngày nhận được đầy đủ hồ sơ yêu cầu bồi thường bảo hiểm hợp lệ.
            </Typography></li>
            <li><Typography align='left'>Hồ sơ gồm các tài liệu được quy định tại Điều 15 Nghị định số 03/2021/NĐ-CP ban hành ngày 15/01/2021 của Chính phủ về bảo hiểm Trách nhiệm dân sự của Chủ xe cơ giới.
            </Typography></li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
