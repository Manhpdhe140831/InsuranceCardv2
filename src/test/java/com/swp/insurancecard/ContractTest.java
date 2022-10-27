package com.swp.insurancecard;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.swp.insurancecard.controllers.ContractController;
import com.swp.insurancecard.dto.ContractDto;
import com.swp.insurancecard.models.Contract;
import com.swp.insurancecard.repository.ContractRepository;
import org.hamcrest.Matcher;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.match.MockRestRequestMatchers;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@WebMvcTest(ContractController.class)
public class ContractTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    ContractRepository contractRepository;

    ContractDto contractRecord1 = new ContractDto(1l, "abc123");
    ContractDto contractRecord2 = new ContractDto(2l, "adf123");
    ContractDto contractRecord3 = new ContractDto(3l, "xyz123");
    @Test
    public void getAllRecord_success() throws Exception {
        List<ContractDto> list = new ArrayList<>();
        list.add(contractRecord1);
        list.add(contractRecord2);
        list.add(contractRecord3);

        Mockito.when(contractRepository.findAll()).thenReturn(null);
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/contract")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect((ResultMatcher) MockRestRequestMatchers.jsonPath("$", hasSize(0)));


    }
}
